import { Layout } from "../Layout/Layout"
import { Button, Card, Col, Modal, Row } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";

import { products } from "../../api";
import { useState, useContext, useEffect } from "react";
import { ConsumerUsuario } from "../../contexts/global";

import { useNavigate } from "react-router-dom";


export const Home = () => {
    const [size, setSize] = useState("large");
    const navigate = useNavigate();

    const {user,setCurrent}=useContext(ConsumerUsuario)
    console.log('user',user)

    useEffect(() => {
        if (user && !user.email) {
          navigate("/");
        }
        setCurrent("home");
      }, []);
    


    return (
        <div clasName="App">
            <Layout />
            <header className="App-header">
                <h2>Lista de productos</h2>
                <Row gutter={16}>
                {products.map((product) => (
                  <Col span={8} style={{ paddingTop: 15 }}>
                    <Card
                      title={product.name}
                      extra={`$${product.cost}`}
                      bordered={false}
                    >
                      {product.description}
                      <div
                        style={{
                          paddingTop: 20,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          type="primary"
                          shape="round"
                          style={{ width: "100%" }}
                          icon={<AppstoreAddOutlined />}
                          size={size}
                        //   onClick={() => addCart(product)}
                        >
                          Agregar
                        </Button>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </header>
        </div>
    )
}
