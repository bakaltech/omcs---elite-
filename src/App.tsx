/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { GetHelp } from './pages/GetHelp';
import { Programs } from './pages/Programs';
import { ProgramDetail } from './pages/ProgramDetail';
import { Counselling } from './pages/Counselling';
import { Impact } from './pages/Impact';
import { Stories } from './pages/Stories';
import { StoryDetail } from './pages/StoryDetail';
import { GetInvolved } from './pages/GetInvolved';
import { Donate } from './pages/Donate';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Volunteer } from './pages/Volunteer';
import { Resources } from './pages/Resources';
import { Events } from './pages/Events';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="get-help" element={<GetHelp />} />
            <Route path="programs" element={<Programs />} />
            <Route path="programs/:id" element={<ProgramDetail />} />
            <Route path="counselling" element={<Counselling />} />
            <Route path="impact" element={<Impact />} />
            <Route path="stories" element={<Stories />} />
            <Route path="stories/:slug" element={<StoryDetail />} />
            <Route path="get-involved" element={<GetInvolved />} />
            <Route path="events" element={<Events />} />
            <Route path="donate" element={<Donate />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="resources" element={<Resources />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
