import React from 'react';

function LilIcons({ icon }) {
    if (icon.toLowerCase() === 'react') {
        return (<img width="48" height="48" src="https://res.cloudinary.com/dggfjc8rb/image/upload/v1712936898/React_g9xeoh.png" alt="react" />)
    } else if (icon.toLowerCase() === 'javascript') {
        return (<img width="75" height="48" src="https://res.cloudinary.com/dggfjc8rb/image/upload/v1712936898/JS_w6dngd.png" alt="javascript" />)
    } else if (icon.toLowerCase() === 'mongodb') {
        return (<img width="52" height="48" src="https://res.cloudinary.com/dggfjc8rb/image/upload/v1712936898/MongoDB_ygcrbh.png" alt="mongo-db" />)
    } else if (icon.toLowerCase() === 'passport') {
        return (<img width="52" height="48" src="https://res.cloudinary.com/dggfjc8rb/image/upload/v1712936898/Passport_mhhroa.png" alt="passport" />)
    } else if (icon.toLowerCase() === 'firebase') {
        return (<img width="48" height="48" src="https://res.cloudinary.com/dggfjc8rb/image/upload/v1712936898/Firebase_nt67hr.png" alt="Firebase" />)
    } else if (icon.toLowerCase() === 'express') {
        return (<img width="90" height="90" src="https://res.cloudinary.com/dggfjc8rb/image/upload/v1712937408/Expressjs_ueuw7z.svg" alt="express" style={{ backgroundColor: 'white' }} />)
    } else if (icon.toLowerCase() === 'typescript') {
        return (<img width="60" height="60" src="https://res.cloudinary.com/dggfjc8rb/image/upload/v1714128264/icons8-typescript-96_ezyw87.png" alt="typescript" />)
    } else { return '' }
}

export default LilIcons;