import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FasadnyeKassety from './pages/FasadnyeKassety';
import AKK from './pages/AKK';
import PoroshkovayaPokraska from './pages/PoroshkovayaPokraska';
import Profnastil from './pages/Profnastil';
import DobornyeElementy from './pages/DobornyeElementy';
import KorzinyDlyaKondicionerov from './pages/KorzinyDlyaKondicionerov';
import Galereya from './pages/Galereya';
import Kontakty from './pages/Kontakty';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="fasadnye-kassety" element={<FasadnyeKassety />} />
        <Route path="alyuminievye-kompozitnye-kassety" element={<AKK />} />
        <Route path="poroshkovaya-pokraska" element={<PoroshkovayaPokraska />} />
        <Route path="profnastil" element={<Profnastil />} />
        <Route path="dobornye-elementy" element={<DobornyeElementy />} />
        <Route path="korziny-dlya-kondicionerov" element={<KorzinyDlyaKondicionerov />} />
        <Route path="galereya" element={<Galereya />} />
        <Route path="kontakty" element={<Kontakty />} />
      </Route>
    </Routes>
  );
}

export default App;
