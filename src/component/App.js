import Header from './header';
import Footer from './footer';
import Section from './section';
import Toolbar from './toolbar';

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
      <Toolbar />
      {data.data.map(blog_list => (
        <Section title={blog_list.title} date={blog_list.date} id={blog_list.id} key={blog_list.id}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
