import '../../styles/layout-2.css'

const Layout2 = ({ children }) => {
  return (
    <>
      <h1 className="text-red">Layout 2</h1>
      <main>{children}</main>
    </>
  )
}

export default Layout2
