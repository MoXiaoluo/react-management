import { useSelector } from 'react-redux';

export default function Page1() {
  const { num } = useSelector((state) => ({
    num: state.num,
  }));
  return (
    <div>
      Page1<p>{num}</p>
    </div>
  );
}
