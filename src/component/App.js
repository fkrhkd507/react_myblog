import Header from './header';
import Footer from './footer';
import Section from './section';

const App = () => {

  const data = {
    'data' : [
      {
        'id' : 1,
        'title' : '테스트 글',
        'date' : '2021-09-11',
        'detail' : '이것은 수류탄이다'
      },
      {
        'id' : 2,
        'title' : '테스트 글1',
        'date' : '2021-09-15',
        'detail' : '응애'
      },
      {
        'id' : 3,
        'title' : '테스트 글2',
        'date' : '2021-09-16',
        'detail' : 'Live again'
      },
      {
        'id' : 4,
        'title' : '테스트 글3',
        'date' : '2021-09-19',
        'detail' : 'mori calliope'
      }
    ]
  }

  return (
    <div className="Common">
      <Header />
      <div className="Section">
        {data.data.map(blog_list => (
          <Section title={blog_list.title} date={blog_list.date} detail={blog_list.detail} id={blog_list.id} key={blog_list.id}/>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
