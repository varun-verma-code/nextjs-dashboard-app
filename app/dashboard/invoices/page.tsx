export default async function Page() {
  console.log('Delay in dashboard/invoices');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>Invoices Page</div>;
}
