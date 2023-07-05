import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Alert, Space, Typography, Card } from "antd"


function Purchase() {
  const { Meta } = Card
  const { Text } = Typography

  const data = useSelector(state => state)
  console.log(data)
  return (
    <Row gutter={16}>
      <Col span={24}>

        <Row gutter={16}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Alert message=" you have purchased the meal order" type="success" showIcon />
          </Space>
        </Row>
        <Row gutter={16}>
          <Col span={6}  >

            <Typography>
              <Typography.Title level={4}> Your order Details </Typography.Title>

            </Typography>
            <Card

              hoverable
              style={{
                width: "100%",
                padding: "10px"
              }}
              cover={<img alt="foodImage" src={data?.orderReducer?.meal?.image} />}
            >
              <Meta title={data?.orderReducer?.meal?.name} description="" />
            </Card>
          </Col>
          <Col span={12}>
            <Typography>
              <Typography.Title level={3}> Your shipping Details </Typography.Title>

            </Typography>
            <Col span={24}  >
              <Card


                style={{
                  width: "100%",
                  padding: "10px"
                }}

              >
                <Row>
                  <Col span={24}>Name: {data?.userDetailsReducer?.user?.name}</Col>

                  <Col span={23}>Address: {data?.userDetailsReducer?.user?.address}</Col>

                  <Col span={24}>Phone: {data?.userDetailsReducer?.user?.phone}</Col>


                </Row>
              </Card>
            </Col>
          </Col>
        </Row>




      </Col>

    </Row>
  )
}

export default Purchase