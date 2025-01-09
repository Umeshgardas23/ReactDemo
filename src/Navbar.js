import React from 'react'

const Navbar   = () => {
  return (
    <div>
      <button>Home</button>
      <button>About</button>
      {this.state.arr.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  )
}

export default Navbar
