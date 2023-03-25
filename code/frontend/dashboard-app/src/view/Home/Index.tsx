import * as React from 'react';

function Home() {
    return (
        <div className="HomeContainer">
            {
                Array(100).fill("elements34567890345678904567890").map((element, index) => (
                        <div key={index}>{element}</div>
                    ))
            }
        </div>
    );
}

export default Home;