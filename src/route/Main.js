import Header from '../component/header';
import Footer from '../component/footer';
import Section from '../component/section';

const Main = (e) => {
  console.log(e);

  const Regex = /([\w])+/;

  let page = e.location.pathname.match(Regex) ? e.location.pathname.match(Regex)[0] : '';
  
  const data = {
    'data' : [
      {
        'id' : 1,
        'type' : 'Javascript',
        'title' : '테스트 글',
        'date' : '2021-09-11',
        'detail' : '이것은 수류탄이다'
      },
      {
        'id' : 2,
        'type' : 'Css', 
        'title' : '테스트 글1',
        'date' : '2021-09-15',
        'detail' : '응애'
      },
      {
        'id' : 3,
        'type' : 'ReactJs',
        'title' : '테스트 글2',
        'date' : '2021-09-16',
        'detail' : 'Live again'
      },
      {
        'id' : 4,
        'type' : 'Html',
        'title' : '테스트 글3',
        'date' : '2021-09-19',
        'detail' : 'mori calliope'
      }
    ]
  }

  return (
    <div className="Common">
      <Header title={page}/>
      <div className="Section">
        {data.data.map(blog_list => (
          <Section title={blog_list.title} date={blog_list.date} detail={blog_list.detail} id={blog_list.id} key={blog_list.id}/>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Main;
