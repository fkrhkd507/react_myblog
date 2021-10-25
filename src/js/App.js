import Header from './header';
import Footer from './footer';
import Section from './section';

const App = () => {

  const data = {
    'data' : [
      {
        'id' : 1,
        'title' : '테스트 글',
        'date' : '2021-09-11'
      },
      {
        'id' : 2,
        'title' : '테스트 글1',
        'date' : '2021-09-15'
      },
      {
        'id' : 3,
        'title' : '테스트 글2',
        'date' : '2021-09-16'
      },
      {
        'id' : 4,
        'title' : '테스트 글3',
        'date' : '2021-09-19'
      }
    ]
  }

  return (
    <div className="Common">
      <Header />
      <Section data={data}/>
      <Footer />
    </div>
  );
}

export default App;
