import { Phone, Globe, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import type { Store } from '../../types';

interface StoreContactProps {
  store: Store;
}

export function StoreContact({ store }: StoreContactProps) {
  const daysOfWeek = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>

        <div className="space-y-4">
         

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-slate-700" />
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Phone</p>
              <a
                href={`tel:${store.contact.phone}`}
                className="text-slate-900 font-medium hover:text-blue-600 transition-colors"
              >
                {store.contact.phone}
              </a>
            </div>
          </div>

          {store.contact.website && (
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Website</p>
                <a
                  href={`https://${store.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 font-medium hover:text-blue-600 transition-colors"
                >
                  {store.contact.website}
                </a>
              </div>
            </div>
          )}

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-slate-700" />
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Location</p>
              <p className="text-slate-900 font-medium">
                {store.location.address}
                <br />
                {store.location.city}, {store.location.state} {store.location.zipCode}
                <br />
                {store.location.country}
              </p>
            </div>
          </div>

          {store.socialMedia && (
            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-3">Follow Us</p>
              <div className="flex gap-2">
                {store.socialMedia.instagram && (
                  <a
                    href={`https://instagram.com/${store.socialMedia.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-slate-700" />
                  </a>
                )}
                {store.socialMedia.facebook && (
                  <a
                    href={`https://facebook.com/${store.socialMedia.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-slate-700" />
                  </a>
                )}
                {store.socialMedia.twitter && (
                  <a
                    href={`https://twitter.com/${store.socialMedia.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-slate-700" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-slate-700" />
          <h3 className="text-xl font-bold text-slate-900">Business Hours</h3>
        </div>

        <div className="space-y-3">
          {daysOfWeek.map(({ key, label }) => (
            <div key={key} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
              <span className="text-slate-700 font-medium">{label}</span>
              <span className="text-slate-900 font-semibold">
                {store.hours[key as keyof Store['hours']]}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Note:</span> Hours may vary during holidays.
            Please call ahead to confirm.
          </p>
        </div>
      </div>
    </div>
  );
}
