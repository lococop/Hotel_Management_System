const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : conf.host,
  user : conf.user,
  password : conf.password,
  port : conf.port,
  database : conf.database
});
connection.connect();

const multer = require('multer');
const upload = multer({dest : './upload'});

app.get('/api/reservations', (req, res) => {
    connection.query(
      "SELECT reserve_number, guest_mail, guest_name, room_number, number_of_members, check_in, check_out, real_check_in, real_check_out, cancel_status FROM Reservation NATURAL JOIN Guest WHERE isDeleted = 0",
      (err, rows, fields) => {
        res.send(rows);
      }
    )
});

app.get('/api/cleanups', (req, res) => {
  connection.query(
    "SELECT * FROM Cleanup WHERE clean_isDeleted = 0",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.post('/api/cleanups', upload.single(), (req, res) => {
  let sql = 'INSERT INTO Cleanup VALUES (?, ?, ?, ?, ?, 0)';
  let clean_area = req.body.clean_area;
  let staff_id = req.body.staff_id;
  let clean_status = req.body.clean_status;
  let clean_members = req.body.clean_members;
  let clean_time = req.body.clean_time;
  let params = [clean_area, staff_id, clean_status, clean_members, clean_time];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.put('/api/cleanups', upload.single(), (req, res) => {
  let sql = 'UPDATE Cleanup SET ' + req.body.revise_element + ' = ? WHERE clean_area = ?';
  let revise_value = req.body.revise_value;
  let clean_area = req.body.clean_area;
  let params = [revise_value, clean_area];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.delete('/api/cleanups/:clean_area', (req, res) => {
  let sql = 'UPDATE Cleanup SET clean_isDeleted = 1 WHERE clean_area = ?';
  let params = [req.params.clean_area];
  connection.query(sql, params,
    (err,rows,fields) => {
      res.send(rows);
    })
})

app.get('/api/items', (req, res) => {
  connection.query(
    "SELECT * FROM Item WHERE item_isDeleted = 0",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.post('/api/items', upload.single(), (req, res) => {
  let sql = 'INSERT INTO Item VALUES (?, ?, ?, ?, ?, ?, ?)';
  let item_name = req.body.item_name;
  let staff_id = req.body.staff_id;
  let item_area = req.body.item_area;
  let item_stock = req.body.item_stock;
  let item_need = req.body.item_need;
  let item_budget = req.body.item_budget;
  let order_status = req.body.order_status;
  let params = [item_name, staff_id, item_area, item_stock, item_need, item_budget, order_status];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.put('/api/items', upload.single(), (req, res) => {
  let sql = 'UPDATE Item SET ' + req.body.revise_element + ' = ? WHERE item_name = ?';
  let revise_value = req.body.revise_value;
  let item_name = req.body.item_name;
  let params = [revise_value, item_name];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.delete('/api/items/:item_name', (req, res) => {
  let sql = 'UPDATE Item SET item_isDeleted = 1 WHERE item_name = ?';
  let params = [req.params.item_name];
  connection.query(sql, params,
    (err,rows,fields) => {
      res.send(rows);
    })
})

app.get('/api/parkings', (req, res) => {
  connection.query(
    "SELECT * FROM Parking WHERE park_isDeleted = 0",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.post('/api/parkings', upload.single(), (req, res) => {
  let sql = 'INSERT INTO Parking VALUES (?, ?, ?, ?, NOW(), "0000-00-00", 0)';
  let car_number = req.body.car_number;
  let staff_id = req.body.staff_id;
  let guest_mail = req.body.guest_mail;
  let car_model = req.body.car_model;
  let park_in = req.body.park_in;
  let params = [car_number, staff_id, guest_mail, car_model, park_in];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.put('/api/parkings', upload.single(), (req, res) => {
  let sql = 'UPDATE Parking SET park_out = NOW() WHERE car_number = ?';
  let car_number = req.body.car_number;
  let params = [car_number];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.delete('/api/parkings/:car_number', (req, res) => {
  let sql = 'UPDATE Parking SET park_isDeleted = 1 WHERE car_number = ?';
  let params = [req.params.car_number];
  connection.query(sql, params,
    (err,rows,fields) => {
      res.send(rows);
    })
})

app.get('/api/facilitys', (req, res) => {
  connection.query(
    "SELECT * FROM Facility",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.put('/api/facilitys', upload.single(), (req, res) => {
  let sql = 'UPDATE Facility SET ' + req.body.revise_element + ' = ? WHERE facility_name = ?';
  let revise_value = req.body.revise_value;
  let facility_name = req.body.facility_name;
  let params = [revise_value, facility_name];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.get('/api/services', (req, res) => {
  connection.query(
    "SELECT * FROM Service WHERE service_isDeleted = 0",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.post('/api/services', upload.single(), (req, res) => {
  let sql = 'INSERT INTO Service VALUES (?, ?, ?, ?, ?, 0)';
  let service_name = req.body.service_name;
  let staff_id = req.body.staff_id;
  let guest_mail = req.body.guest_mail;
  let room_number = req.body.room_number;
  let service_price = req.body.service_price;
  let params = [service_name, staff_id, guest_mail, room_number, service_price];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.delete('/api/services/:guest_mail', (req, res) => {
  let sql = 'UPDATE Service SET service_isDeleted = 1 WHERE guest_mail = ?';
  let params = [req.params.guest_mail];
  connection.query(sql, params,
    (err,rows,fields) => {
      res.send(rows);
    })
})

app.get('/api/home_rooms', (req, res) => {
  connection.query(
    "SELECT * FROM Room WHERE room_number = '101호' or room_number = '304호' or room_number = '402호' or room_number = '405호'",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.get('/api/rooms', (req, res) => {
  connection.query(
    "SELECT * FROM Room",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.put('/api/rooms', upload.single(), (req, res) => {
  let sql = 'UPDATE Room SET ' + req.body.revise_element + ' = ? WHERE room_number = ?';
  let revise_value = req.body.revise_value;
  let room_number = req.body.room_number;
  let params = [revise_value, room_number];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.get('/api/guests', (req, res) => {
  connection.query(
    "SELECT * FROM Guest WHERE guest_isDeleted = 0",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.post('/api/guests', upload.single(), (req, res) => {
  let sql = 'UPDATE Guest SET ' + req.body.revise_element + ' = ? WHERE guest_mail = ?';
  let revise_value = req.body.revise_value;
  let guest_mail = req.body.guest_mail;
  let params = [revise_value, guest_mail];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.put('/api/guests', upload.single(), (req, res) => {
  let sql = 'INSERT INTO Guest VALUES (?, ?, ?, ?, "400,000", 0)';
  let guest_mail = req.body.guest_mail;
  let guest_name = req.body.guest_name;
  let payment_info = req.body.payment_info;
  let guest_phone_number = req.body.guest_phone_number;
  let params = [guest_mail, guest_name, payment_info, guest_phone_number];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.delete('/api/guests/:guest_mail', (req, res) => {
  let sql = 'UPDATE Guest SET guest_isDeleted = 1 WHERE guest_mail = ?';
  let params = [req.params.guest_mail];
  connection.query(sql, params,
    (err,rows,fields) => {
      res.send(rows);
    })
})

app.get('/api/staffs', (req, res) => {
  connection.query(
    "SELECT * FROM Staff WHERE staff_isDeleted = 0",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.use('/image', express.static('./upload'));

app.post('/api/staffs', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO Staff VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)';
  let image = '/image/' + req.file.filename;
  let staff_id = req.body.staff_id;
  let staff_name = req.body.staff_name;
  let staff_role = req.body.staff_role;
  let staff_area = req.body.staff_area;
  let staff_address = req.body.staff_address;
  let staff_mail = req.body.staff_mail;
  let staff_phone_number = req.body.staff_phone_number;
  let staff_salary = req.body.staff_salary;
  let staff_account = req.body.staff_account;
  let staff_memo = req.body.staff_memo;
  let params = [image, staff_id, staff_name, staff_role, staff_area, staff_address, staff_mail, staff_phone_number, staff_salary, staff_account, staff_memo];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.put('/api/staffs', upload.single(), (req, res) => {
  let sql = 'UPDATE Staff SET staff_memo = ? WHERE staff_id = ?';
  let staff_memo = req.body.staff_memo;
  let staff_id = req.body.staff_id;
  let params = [staff_memo, staff_id];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.patch('/api/staffs', upload.single(), (req, res) => {
  let sql = 'UPDATE Staff SET ' + req.body.revise_element + ' = ? WHERE staff_id = ?';
  let revise_value = req.body.revise_value;
  let staff_id = req.body.staff_id;
  let params = [revise_value, staff_id];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});


app.delete('/api/staffs/:staff_id', (req, res) => {
  let sql = 'UPDATE Staff SET staff_isDeleted = 1 WHERE staff_id = ?';
  let params = [req.params.staff_id];
  connection.query(sql, params,
    (err,rows,fields) => {
      res.send(rows);
    })
})

app.post('/api/reservations', upload.single(), (req, res) => {
    let sql = 'UPDATE Reservation SET ' +  req.body.check + ' = NOW() WHERE reserve_number = ?';
    let reserve_number = req.body.reserve_number;
    let params = [reserve_number];
    connection.query(sql, params,
      (err, rows, fields) => {
        res.send(rows);
      });
});

app.patch('/api/reservations', upload.single(), (req, res) => {
  let sql = 'UPDATE Reservation SET ' + req.body.revise_element + ' = ? WHERE reserve_number = ?';
  let revise_value = req.body.revise_value;
  let reserve_number = req.body.reserve_number;
  let params = [revise_value, reserve_number];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.put('/api/reservations', upload.single(), (req, res) => {
  let sql = 'INSERT INTO Reservation VALUES (null, ?, ?, ?, ?, ?, "0000-00-00", "0000-00-00", "N", 0)';
  let guest_mail_R = req.body.guest_mail_R;
  let room_number = req.body.room_number;
  let number_of_members = req.body.number_of_members;
  let startDate = req.body.startDate;
  let endDate = req.body.endDate;
  let params = [guest_mail_R, room_number, number_of_members, startDate, endDate];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
});

app.delete('/api/reservations/:reserve_number', (req, res) => {
  let sql = 'UPDATE Reservation SET isDeleted = 1 WHERE reserve_number = ?';
  let params = [req.params.reserve_number];
  connection.query(sql, params,
    (err,rows,fields) => {
      res.send(rows);
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));