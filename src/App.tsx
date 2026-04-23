import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projetos/:slug" element={<ProjectDetail />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
