import React from 'react';

export default function AppCard() {
    return (
        <div>
          <Card>
            <p>card1</p>
          </Card>
          <Card>
            <h1>card2</h1>
            <p>설명</p>
          </Card>
        </div>
    );
}

function Card({children}) {
    return (
      <div
        style={{
            backgroundColor : 'black',
            borderRadius: '20px',
            color: 'white',
            minHeight: '200px',
            maxWidth: '200px',
            margin: '1rem',
            padding: '2rem',
            textAlign: 'center',
        }}
      >
        {children}
      </div>
    )
}

