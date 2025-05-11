import classNames from 'classnames/bind';
import styles from './App.module.scss';
import { Header } from '@components/Header';

const cn = classNames.bind(styles);

function App() {

  return (
    <div className={cn('app')}>
      <Header/>
      APPLICATION
    </div>
  )
}

export default App;
