
import React from "react"


const msg = "hello world"
let arr = ["刘备", "关羽", "张飞"]

export default class App1 extends React.Component {
    render() {
        return (

            <div>
                <h2>{msg}</h2>
                <hr />

                <label htmlFor="username">用户名：</label>
                <input type="text" id="username" />
                <hr />
                <div className="box">盒子</div>
                <hr />
                <div style={{ backgroundColor: 'skyblue' }}>内容内容</div>
                <hr />
                <ul>
                    {
                        //只有map才有返回值，foreach没有
                        arr.map((item, index) =>
                            <li key={index}>
                                {item}
                            </li>)
                    }
                </ul>
            </div>
        )
    }
}
