'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}',                   config: require('./config/static/static')},
  {method: 'post',   path: '/register',                   config: require('./config/users/register')},
  {method: 'post',   path: '/login',                      config: require('./config/users/login')},
  {method: 'delete', path: '/logout',                     config: require('./config/users/logout')},
  {method: 'get',    path: '/status',                     config: require('./config/users/status')},
  {method: 'get',    path: '/regimes',                    config: require('./config/workouts/query_regimes')},
  {method: 'post',   path: '/regimes',                    config: require('./config/workouts/add_regime')},
  {method: 'get',    path: '/regimes/{rid}/phases',       config: require('./config/workouts/query_phases')},
  {method: 'post',   path: '/phases',                     config: require('./config/workouts/add_phase')},
  {method: 'get',    path: '/phases/{id}/workouts',       config: require('./config/workouts/query_workouts')},
  {method: 'get',    path: '/workouts/day/{id}',          config: require('./config/workouts/find_by_day')},
  {method: 'post',   path: '/workouts',                   config: require('./config/workouts/add_workout')},
  {method: 'get',    path: '/workouts/{id}',              config: require('./config/workouts/find_workout')},
  {method: 'delete', path: '/workouts/{id}',              config: require('./config/workouts/delete_workout')},
  {method: 'post',   path: '/workouts/schedule',          config: require('./config/schedule/schedule_workout')},
  {method: 'get',    path: '/workouts/schedule',          config: require('./config/schedule/query_schedule')},
  {method: 'get',    path: '/workouts/schedule/{date}',   config: require('./config/schedule/get_day')},
  {method: 'post',   path: '/workouts/schedule/day/done', config: require('./config/schedule/complete_day')},
  {method: 'delete', path: '/workouts/day/{id}',          config: require('./config/schedule/delete_day')}
];
