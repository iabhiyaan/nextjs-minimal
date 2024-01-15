import React, {memo} from 'react';

export default memo(function BasicInfo({name, setName, email, setEmail}) {
    return (
        <div>
            <div>
                <input placeholder="name" value={name} style={{color: "black"}} onChange={e => setName(e.target.value)}/>
            </div>
            <br/>
            <div>
                <input placeholder="email" value={email} style={{color: "black"}} onChange={e => setEmail(e.target.value)}/>
            </div>
        </div>
    );
})
