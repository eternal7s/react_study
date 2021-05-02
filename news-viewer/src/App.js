import React, {useState, useCallback} from "react";
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path={"/:category?"} component={NewsPage} />;
};


/*
const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => {
    setCategory(category);
    console.log('선택카테고리: ', category)
  }, []);

  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  );
};
*/

export default App;