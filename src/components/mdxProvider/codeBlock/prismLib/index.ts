import Prism from 'prismjs';
import { Prism as BundledPrism } from 'prism-react-renderer';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-bash';

type PrismLibType = typeof BundledPrism;

const PrismLib = Prism as unknown as PrismLibType;

export default PrismLib;
