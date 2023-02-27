import { useState } from "react";

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [group, setGroup] = useState('');

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="example@example.com"
            />
            <input
                type="text"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                placeholder="9-gr"
            />
            <button onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </div>
    )
}

export { Form }