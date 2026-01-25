import {
  Card,
  Form,
  Button,
  InputGroup,
  Alert,
  Row,
  Col,
} from "react-bootstrap";

export default function FlightBookingForm() {
  return (
    <>
      <style>{`
        body {
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glass-card {
          width: 560px;
          padding: 32px;
          border-radius: 24px;
          backdrop-filter: blur(18px);
          background: rgba(255,255,255,.18);
          box-shadow: 0 30px 60px rgba(0,0,0,.35);
          color: white;
        }

        /* ===== ALERT ===== */
        .glass-card .alert {
          background: rgba(255,255,255,.35);
          border: none;
          color: white;
          border-radius: 12px;
          padding: 10px 18px;
          font-size: 14px;
          margin-bottom: 22px;
        }

        /* ===== HEADING ===== */
        .glass-title {
          text-align: center;
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 26px;
          letter-spacing: .5px;
        }

        /* ===== FORM ===== */
        .form-group {
        margin-bottom: 22px;
        }


        .form-label {
          font-size: 14px;
          margin-bottom: 6px;
        }

        .form-control,
        .form-select {
          background: rgba(255,255,255,.25);
          border: none;
          color: white;
          border-radius: 12px;
          padding: 10px 14px;
        }

        .form-control::placeholder {
          color: rgba(255,255,255,.6);
        }

        .input-group-text {
          background: rgba(255,255,255,.25);
          border: none;
          color: white;
          border-radius: 12px;
        }

        .form-text {
        display: block;
        margin-top: 6px;
        margin-bottom: 12px;
        font-size: 12px;
        color: rgba(255,255,255,.65);
}

       /* ===== FROM / TO ===== */
.location-row {
  margin-top: 12px;
  margin-bottom: 22px;
}

.location-row .form-label {
  display: block;
  margin-bottom: 6px;
}

        /* ===== RADIO ===== */
        .radio-group {
          margin-bottom: 20px;
        }

        .radio-group label {
          margin-right: 24px;
        }

        /* ===== BUTTON ===== */
        .btn-submit {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: none;
          font-weight: 600;
          background: linear-gradient(135deg, #6a5af9, #8f7cf8);
        }
      `}</style>

      <div className="page">
        <Card className="glass-card">
          <Alert>Vui lòng nhập đầy đủ thông tin</Alert>

          <div className="glass-title">Form đặt vé máy bay</div>

          <Form>
            {/* Họ tên */}
            <Form.Group>
              <Form.Label>Họ tên</Form.Label>
              <InputGroup>
                <InputGroup.Text>👤</InputGroup.Text>
                <Form.Control placeholder="Họ tên" />
                <InputGroup.Text>VND</InputGroup.Text>
              </InputGroup>
              <Form.Text>Phải nhập 5 ký tự, in hoa...</Form.Text>
            </Form.Group>

            {/* Địa chỉ */}
            <Form.Group>
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control placeholder="Nhập địa chỉ" />
              <Form.Text>Phải nhập 5 ký tự, in hoa...</Form.Text>
            </Form.Group>

            {/* Đi từ / Đến */}
            <Row className="location-row">
              <Col>
                <Form.Label>Đi từ</Form.Label>
                <Form.Select>
                  <option>Hà Nội</option>
                  <option>Đà Nẵng</option>
                </Form.Select>
              </Col>

              <Col>
                <Form.Label>Đến</Form.Label>
                <Form.Select>
                  <option>Hà Nội</option>
                  <option>TP.HCM</option>
                </Form.Select>
              </Col>
            </Row>

            {/* Radio */}
            <Form.Group className="radio-group">
              <Form.Label>Chọn chiều đi</Form.Label>
              <div>
                <Form.Check inline label="Đi" name="trip" type="radio" defaultChecked />
                <Form.Check inline label="Về" name="trip" type="radio" />
              </div>
            </Form.Group>

            <Button className="btn-submit">Đặt vé</Button>
          </Form>
        </Card>
      </div>
    </>
  );
}
