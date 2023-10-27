interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Service Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Service Manager', 'Mechanic'],
  tenantName: 'Organization',
  applicationName: 'Bike service booking online',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage personal information', 'Book services', 'View services', 'Contact mechanics'],
  ownerAbilities: ['Manage users', 'Manage organizations', 'Manage mechanics', 'Manage services'],
  getQuoteUrl: 'https://app.roq.ai/proposal/98155bcf-d8c4-4404-9902-b7a4e113867f',
};
