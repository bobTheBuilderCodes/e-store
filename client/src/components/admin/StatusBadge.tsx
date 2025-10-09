import type { StoreStatus } from "../../types/admin";

interface StatusBadgeProps {
  status: StoreStatus;
}

const statusConfig = {
  pending: {
    label: 'Pending Review',
    classes: 'bg-orange-100 text-orange-700 border-orange-200'
  },
  approved: {
    label: 'Approved',
    classes: 'bg-green-100 text-green-700 border-green-200'
  },
  rejected: {
    label: 'Rejected',
    classes: 'bg-red-100 text-red-700 border-red-200'
  }
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${config.classes}`}>
      {config.label}
    </span>
  );
}
