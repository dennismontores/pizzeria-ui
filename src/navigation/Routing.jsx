import { Routes, Route } from 'react-router-dom'
import { Home, About } from '@app/pages'

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
  </Routes>
)

export default Routing
