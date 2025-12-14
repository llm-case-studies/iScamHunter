import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductTabs from './ProductTabs'; // We will create this Client Component
import ProductConfigurator from './ProductConfigurator';

const prisma = new PrismaClient();

async function getProduct(id: string) {
    return await prisma.product.findUnique({
        where: { id },
        // Explicitly selecting fields to verify we aren't getting a partial cached object
        // Though type-wise it should be there.
    });
}

export const dynamic = 'force-dynamic'; // Disable caching to ensure we see database updates

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

    let parsedSpecs = null;
    if (product.specs) {
        try {
            // Handle case where Prisma/SQLite might auto-parse JSON
            parsedSpecs = typeof product.specs === 'string' ? JSON.parse(product.specs) : product.specs;
        } catch (e) {
            console.error("Failed to parse specs", e);
        }
    }

    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Back Button */}
                <Link href="/products" className="text-gray-500 hover:text-amber-500 mb-8 inline-block transition-colors">
                    ← Back to Armory
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Image */}
                    <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 p-8 flex items-center justify-center relative group">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        {product.image ? (
                            <img
                                src={product.image.startsWith('/') ? product.image : `/api/image-proxy?url=${product.image}`}
                                alt={product.name}
                                className="w-full h-auto object-contain max-h-[500px] hover:scale-105 transition-transform duration-500 contrast-125 saturate-150 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            />
                        ) : (
                            <div className="text-gray-600">No Image Available</div>
                        )}
                    </div>

                    {/* Right: Info & Actions */}
                    <div>
                        <h1 className="text-4xl font-extrabold text-white mb-2">{product.name}</h1>
                        <div className="text-2xl text-amber-500 font-mono mb-6">
                            ${(product.price / 100).toFixed(2)}
                            <span className="text-sm text-gray-500 ml-3">USD</span>
                        </div>

                        {/* Context Badge */}
                        <div className="mb-8 flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${product.provider === 'manual'
                                ? 'border-purple-500/50 text-purple-400 bg-purple-500/10'
                                : 'border-green-500/50 text-green-400 bg-green-500/10'
                                }`}>
                                {product.provider === 'manual' ? 'Special Assignment' : 'Standard Issue'}
                            </span>
                        </div>

                        {/* Interactive Tabs (Client Component) */}
                        <ProductTabs
                            description={product.description || "No description available."}
                            specs={parsedSpecs}
                        />

                        {/* Configurator Area */}
                        {parsedSpecs && parsedSpecs.options ? (
                            <div className="border-2 border-green-500/50 rounded-xl p-1 mt-8 relative">
                                <div className="absolute -top-3 left-4 bg-[#0a0a0b] px-2 text-green-500 text-xs font-bold">
                                    SYSTEM LOADOUT
                                </div>
                                <ProductConfigurator
                                    basePrice={product.price}
                                    productId={product.id}
                                    options={parsedSpecs.options}
                                />
                            </div>
                        ) : (
                            <div className="mt-8 border-t border-white/10 pt-8">
                                <Link
                                    href={`/checkout?productId=${product.id}`}
                                    className="w-full block text-center bg-amber-500 text-black font-bold text-lg py-4 rounded-xl hover:bg-amber-400 transition-all hover:scale-[1.02] shadow-lg shadow-amber-500/20"
                                >
                                    Acquire Asset
                                </Link>
                                <p className="text-center text-gray-500 text-sm mt-4">
                                    Secure checkout via Stripe.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
