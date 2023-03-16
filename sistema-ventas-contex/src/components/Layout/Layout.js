import {
    ImportOutlined,
    HomeOutlined,
    TeamOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu } from 'antd';

import { useContext, useEffect, useState } from "react";
import { ConsumerUsuario } from "../../contexts/global";

export const Layout = () => {
    const { user, current, addCar, setCount, setUser, setCurrent } =
        useContext(ConsumerUsuario);
        const [items, setItems] = useState([]);



    const saveItems = (count) => {
        const item = [
            {
                label: "Inicio",
                key: "home",
                icon: <HomeOutlined />,
            },
            {
                label: `Carrito ${count}`,
                key: "carrito",
                icon: <ShoppingCartOutlined />,
            },
            {
                label: user.email,
                key: "SubMenu",
                icon: <TeamOutlined />,
                children: [
                    {
                        type: "group",
                        children: [
                            {
                                label: "Cerrar sesion",
                                key: "logout",
                                icon: <ImportOutlined />,
                            },
                        ],
                    },
                ],
            },
        ];
        setItems(item);
    };

    const onClick = (e) => {
        console.log('click ', e);
    };

    const verifyProducts = () => {
        let length = 0;
        let storageCart = localStorage.getItem("cart");
        // if (storageCart) {
        //   let storages = JSON.parse(storageCart);
        //   let findUser = storages.findIndex(
        //     (storage) => storage.user === user.email
        //   );
        //   if (findUser !== -1) {
        //     length = storages[findUser].products.length;
        //     setCount(length);
        //   }
        // }
        saveItems(length);
    };


    useEffect(() => {
        verifyProducts();
        //   }, [addCar]);
    }, []);

    return (
        <Menu
            onClick={onClick}

            mode="horizontal"
            items={items}
            style={{
                display: "flex",
                justifyContent: "end",
                backgroundColor: "#434344",
                color: "white",
            }}
        />
    );
}
