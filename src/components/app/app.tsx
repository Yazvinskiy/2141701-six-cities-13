import {Routes, Route} from 'react-router-dom';

import ScrollToTop from '../../components/scroll-to-top/scroll-to-top';
import WelcomePage from '../../pages/welcome-page/welcome-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

import {AppRoute} from '../../constants';
import {AuthorizationStatus} from '../../constants';
import {Offer} from '../../types/offer';

type AppScreenProps = {
  allCityList: string[];
  sortTypePlace: string[];
  offers: Offer[];
};

function App({ allCityList, sortTypePlace, offers }: AppScreenProps): JSX.Element {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path={AppRoute.Main} element={<WelcomePage allCityList={allCityList} sortTypePlace={sortTypePlace} offers={offers}/>}/>
      <Route path={AppRoute.Login} element={<LoginPage/>}/>
      <Route path={AppRoute.Favorites} element={
      <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
        <FavoritesPage offers={offers}/>
      </PrivateRoute>
      }
      />
      <Route path={AppRoute.Offer} element={<OfferPage offers={offers}/>}/>
      <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
    </Routes>
    </>
  );
}

export default App;
