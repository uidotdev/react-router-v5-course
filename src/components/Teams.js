import * as React from 'react'
import useTeamNames from '../hooks/useTeamNames'
import Sidebar from './Sidebar'
import {
  Route,
  Link,
  Switch,
  useRouteMatch,
  useParams
} from 'react-router-dom'
import useTeam from '../hooks/useTeam'
import TeamLogo from './TeamLogo'
import Loading from './Loading'

function Team () {
  const { teamId } = useParams()
  const {
    loading,
    response: team
  } = useTeam(teamId)

  if (loading === true) return null

  return (
    <div className='panel'>
      <div style={{width: '100%'}}>
        <TeamLogo id={team.id} className='center' />
        <h1 className='medium-header'>{team.name}</h1>
        <ul className='info-list row'>
          <li>Est.<div>{team.established}</div></li>
          <li>Manager<div>{team.manager}</div></li>
          <li>Coach<div>{team.coach}</div></li>
        </ul>
        <Link
          className='center btn-main'
          to={`/${teamId}`}>
            {team.name} Team Page
        </Link>
      </div>
    </div>
  )
}

export default function Teams () {
  const {
    response: teamNames,
    loading
  } = useTeamNames()
  const { url } = useRouteMatch()

  if (loading === true) {
    return <Loading />
  }

  return (
    <div className='container two-column'>
      <Sidebar
        title='Teams'
        list={teamNames}
      />

      <Switch>
        <Route path={`${url}/:teamId`}>
          <Team />
        </Route>
        <Route path='*'>
          <div className='sidebar-instruction'>Select a Team</div>
        </Route>
      </Switch>
    </div>
  )
}