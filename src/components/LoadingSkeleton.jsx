import React from 'react';
import { motion } from 'framer-motion';

const LoadingSkeleton = ({ type = 'card', className = '' }) => {
  const baseClasses = "bg-primary/30 rounded-lg overflow-hidden";

  const skeletonVariants = {
    card: (
      <div className={`${baseClasses} ${className}`}>
        <div className="p-4 sm:p-6 space-y-4">
          {/* Icon placeholder */}
          <div className="w-12 h-12 bg-primary/50 rounded-lg animate-pulse" />
          
          {/* Title placeholder */}
          <div className="space-y-2">
            <div className="h-4 bg-primary/50 rounded w-3/4 animate-pulse" />
            <div className="h-3 bg-primary/40 rounded w-1/2 animate-pulse" />
          </div>
          
          {/* Progress bar placeholder */}
          <div className="space-y-2">
            <div className="h-2 bg-primary/50 rounded-full animate-pulse" />
            <div className="h-3 bg-primary/40 rounded w-12 animate-pulse" />
          </div>
        </div>
      </div>
    ),
    
    text: (
      <div className={`${baseClasses} ${className}`}>
        <div className="p-4">
          <div className="h-4 bg-primary/50 rounded w-3/4 animate-pulse" />
          <div className="h-3 bg-primary/40 rounded w-full mt-2 animate-pulse" />
          <div className="h-3 bg-primary/40 rounded w-5/6 mt-2 animate-pulse" />
        </div>
      </div>
    ),
    
    button: (
      <div className={`${baseClasses} ${className}`}>
        <div className="px-6 py-3 h-10 bg-primary/50 rounded-lg animate-pulse" />
      </div>
    ),
    
    project: (
      <div className={`${baseClasses} ${className}`}>
        <div className="space-y-4">
          {/* Image placeholder */}
          <div className="h-48 sm:h-56 bg-primary/50 rounded-t-lg animate-pulse" />
          
          {/* Content placeholder */}
          <div className="p-4 sm:p-6 space-y-3">
            <div className="h-5 bg-primary/50 rounded w-3/4 animate-pulse" />
            <div className="space-y-2">
              <div className="h-3 bg-primary/40 rounded animate-pulse" />
              <div className="h-3 bg-primary/40 rounded w-5/6 animate-pulse" />
            </div>
            <div className="flex gap-2">
              <div className="h-6 bg-primary/40 rounded-full w-16 animate-pulse" />
              <div className="h-6 bg-primary/40 rounded-full w-20 animate-pulse" />
              <div className="h-6 bg-primary/40 rounded-full w-14 animate-pulse" />
            </div>
            <div className="h-8 bg-primary/50 rounded-lg animate-pulse mt-4" />
          </div>
        </div>
      </div>
    ),
    
    skill: (
      <div className={`${baseClasses} ${className}`}>
        <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
          {/* Icon placeholder */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/50 rounded-lg animate-pulse mx-auto" />
          
          {/* Title placeholder */}
          <div className="h-4 bg-primary/50 rounded w-3/4 mx-auto animate-pulse" />
          
          {/* Progress bar placeholder */}
          <div className="space-y-2">
            <div className="h-1 sm:h-1.5 bg-primary/50 rounded-full animate-pulse" />
            <div className="h-3 bg-primary/40 rounded w-12 mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    )
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {skeletonVariants[type] || skeletonVariants.card}
    </motion.div>
  );
};

// Skeleton grid for multiple items
export const SkeletonGrid = ({ count = 6, type = 'skill', className = '' }) => {
  return (
    <div className={`grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <LoadingSkeleton key={index} type={type} />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
