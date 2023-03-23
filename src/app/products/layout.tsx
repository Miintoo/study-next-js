import { Metadata } from 'next';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 판매하는 곳입니다.'
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <a href="">여성옷</a>
        <a href="">남성옷</a>
      </nav>
      <section>{children}</section>
    </>
  );
}
