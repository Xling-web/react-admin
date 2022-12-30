import React, { useEffect, Fragment } from 'react';
import 'nprogress/nprogress.css'
const nprogress = require('nprogress')

const loadComp = (Com) => {
  return class LoadComp extends React.Component{
    render() {
      return (
        <React.Suspense fallback={<NProgress />}>
          <Com />
        </React.Suspense>
      )
    }
  }
}

// 进度条
const NProgress = () => {
  
  useEffect(() => {
    nprogress.start()
    return () => {
      nprogress.done()
    } 
  }, [])
  return (
    <Fragment />
  );
};
 
export default loadComp;