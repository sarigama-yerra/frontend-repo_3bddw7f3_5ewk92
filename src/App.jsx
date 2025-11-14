import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Scene from './pages/Scene'
import Hall from './pages/Hall'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scene/:id" element={<Scene />} />
      <Route path="/hall" element={<Hall />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
