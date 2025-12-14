import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

async function getProducts() {
    return await prisma.product.findMany({
        where: {
            // Optional: Filter out hidden items if we had a status field
        }
    });
}

export default async function ProductGridPage() {
    const products = await getProducts();

    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white">
            {/* Header */}
            <div className="bg-amber-500/10 border-b border-amber-500/20 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-amber-500 tracking-tight mb-2">
                        The Armory
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Gear up for the hunt. From street-ready hoodies to military-grade interception nodes.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-square w-full bg-gray-800 relative overflow-hidden">
                                {product.image ? (
                                    <img
                                        src={product.image.startsWith('http') ? product.image : `/api/image-proxy?url=${product.image}`} // Fallback logic handled in component usually, simplifying here
                                        alt={product.name}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-600">
                                        No Image
                                    </div>
                                )}

                                {/* Badge Overlay */}
                                {product.specs && (
                                    <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">
                                        TECH SPECS
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-mono text-amber-500">
                                        ${(product.price / 100).toFixed(2)}
                                    </span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider text-xs">
                                        {product.provider === 'manual' ? 'Special Order' : 'In Stock'}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
