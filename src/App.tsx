import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/Loader"

const Dashboard = lazy(() => import("./pages/Dashboard"))
const Products = lazy(() => import("./pages/Products"))
const Transactions = lazy(() => import("./pages/Transactions"))
const Customers = lazy(() => import("./pages/Customers"))
const NewProducts = lazy(() => import("./pages/management/NewProducts"))
const ProductsManagement = lazy(() => import("./pages/management/ProductsManagement"))
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"))


function App() {
  return (
    <Router>
      <Suspense fallback = {<Loader/>}>
        <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/admin/Products" element={<Products />}/>
        <Route path="/admin/Transactions" element={<Transactions />}/>
        <Route path="/admin/Customers" element={<Customers />}/>

        <Route path="/admin/product/new" element={<NewProducts />} />
          <Route path="/admin/product/:id" element={<ProductsManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />

      </Routes>
      </Suspense>
    </Router>
  )
}

export default App

