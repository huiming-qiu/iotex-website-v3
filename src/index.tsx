import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Developers } from './pages/Developers';
import { Team } from './pages/Team';
import { Advanced } from './pages/Advanced';
import { Investors } from './pages/Investors';
import { useStore } from '@/store/index';
import { customTheme } from './lib/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Enterprise from "./pages/Enterprise";
import Faq from "./pages/Faq/Faq";
import { Research } from './pages/Research'
import MediaCenter from "./pages/MediaCenter";
import Pebble from "./pages/Pebble";
import { EmailPopup } from './components/EmailPopup'
import { hotjar } from 'react-hotjar';
import {Ucam} from "@/pages/Ucam";

hotjar.initialize(2494554, 6);

export const App = observer(() => {
	const { lang } = useStore();
  let routes = [
    { path: '/', component: Home},
    { path:'/developers', component: Developers},
    { path: '/faq', component: Faq},
    { path: '/team', component: Team},
    { path: '/enterprise', component: Enterprise},
    { path: '/research', component: Research},
    { path: '/press', component: MediaCenter},
    { path: '/pebble', component: Pebble},
    { path: '/advanced', component: Advanced},
    { path: '/for-investors', component: Investors},
    { path: '/ucam', component: Ucam},
  ]
	useEffect(() => {
		lang.init();
	}, []);
	return (
    <ChakraProvider theme={customTheme}>
      {/* <EmailPopup /> */}
      <Router>
        <Switch>
          {
            routes.map(item => {
              return  <Route path={item.path} exact key={item.path} component={item.component} />
            })
          }
        </Switch>
      </Router>
    </ChakraProvider>
	);
});

export default App;
