import {Link} from '@remix-run/react';
export const meta = () => {
  return [
    { title: "Notes" },
    { name: "description", content: "Quick notes app" },
  ];
};

export default function Index() {
  return (
    <section id="hero">
      <div className='hero-action'>
        <h1>Track your notes <span id="headingOneCap">ON THE GO</span></h1>
      <p>Try out what you've been missing out on. Watch your production sky rocket today</p>
      <div>
        <Link to="/notes" className='go-btn'>Go</Link>
      </div>
      </div>
      <div className='hero-image'>
        <img src='https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </div>
      
    </section>
  );
}
