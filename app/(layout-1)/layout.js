import '../../styles/layout-1.css'

const Layout1 = ({children}) => {
  return (
    <>
      <h1 className="eta-text-red">Layout 1</h1>
      <main>{children}</main>
    </>
  )
}

export default Layout1
