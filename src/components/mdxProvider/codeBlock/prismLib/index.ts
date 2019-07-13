import Prism from 'prismjs';
import { Prism as BundledPrism } from 'prism-react-renderer';
import 'prismjs/components/prism-csharp';

type PrismLibType = typeof BundledPrism;

const PrismLib = (Prism as unknown) as PrismLibType;

export default PrismLib;
