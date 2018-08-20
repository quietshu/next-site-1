export default ({children}) =>
  <div>
    <style jsx>{`
      {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
      }
    `}</style>
    {children}
  </div>