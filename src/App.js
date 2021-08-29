import './App.css';

import { getSuperHero } from './api/index';
import SuperHeroData from './components/SuperHeroData';

function App() {
  console.log("FIND ME", getSuperHero('spider-man'));

  return (
    <SuperHeroData />
  );
}

export default App;
