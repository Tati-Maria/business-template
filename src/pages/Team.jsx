import {useEffect} from 'react'
import HeaderTitle from '../components/common/HeaderTitle';
import Title from '../components/common/Title';
import TeamList from '../components/TeamList';

const Team = () => {

  useEffect(() => {
    document.title = 'Team | Business'
  }, [])

  return (
    <>
      <HeaderTitle title='Team' />
      <Title subtitle='Our People' title='Our world-class team' />
      <TeamList />
    </>
  )
}

export default Team