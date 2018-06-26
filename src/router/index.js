import Vue from 'vue'
import Router from 'vue-router'


// Views
import HomeView from '@/views/Home'
import ContactView from '@/views/Contact'
import VideosView from '@/views/Videos'
import RecipesView from '@/views/Recipes'
import InterViews from '@/views/InterViews'
import FavoritesView from '@/views/Favorites'
import BeerOfTheWeek from '@/views/Weekbeer'
import RegresiveCount from '@/views/Regresive'
import ActualView from '@/views/Actual'
import CitiesView from '@/views/Cities'
import TastingView from '@/views/Tasting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: ContactView
    },
    {
      path: '/videos',
      name: 'VideosView',
      component: VideosView
    },
    {
      path: '/recipes',
      name: 'RecipesView',
      component: RecipesView
    },
    {
      path: '/interviews',
      name: 'InterViews',
      component: InterViews
    },
    {
      path: '/favorites',
      name: 'FavoritesView',
      component: FavoritesView
    },
    {
      path: '/beerweek',
      name: 'BeerOfTheWeek',
      component: BeerOfTheWeek
    },
    {
      path: '/regresive',
      name: 'RegresiveCount',
      component: RegresiveCount
    },
    {
      path: '/actual',
      name: 'ActualView',
      component: ActualView
    },
    {
      path: '/cities',
      name: 'CitiesView',
      component: CitiesView
    },
    {
      path: '/tasting',
      name: 'TastingView',
      component: TastingView
    }
  ]
})
