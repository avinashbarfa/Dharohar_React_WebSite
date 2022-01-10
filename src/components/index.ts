import Footer from './footer';
import Header from './header';
import CustomImageList from './customImageList';

export interface SimpleMap<K> {
    [key: number | string]: K;
}

export { Header, Footer, CustomImageList };
