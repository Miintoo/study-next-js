import GoProductsButton from '@/components/GoProductsButton';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3;

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    redirect('/products');
    // notFound();
  }
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <>
      <h2>{product.name} 제품 설명 페이지</h2>;
      <Image src={`/images/${product.image}`} alt={product.name} width={400} height={400} />
      <GoProductsButton />
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거야 (SSG)
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id
  }));
}
