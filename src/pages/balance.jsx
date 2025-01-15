import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
        {/* top content start*/}
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <Card title="Balances" />
            <Card title="&nbsp;" />
            <Card 
                title="&nbsp;" 
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas omnis suscipit totam consequuntur, reiciendis dolore enim sed consequatur dignissimos. Omnis officiis fugiat tempora vero velit cumque assumenda beatae facere."
            /> 
        </div>
        {/* top content end*/}

        {/* bottom content start*/}
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <Card 
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas omnis suscipit totam consequuntur, reiciendis dolore enim sed consequatur dignissimos. Omnis officiis fugiat tempora vero velit cumque assumenda beatae facere."
            /> 
            <Card />
            <Card />
        </div>
        {/* bottom content end*/}
        
    </MainLayout>
  );
};

export default BalancePage;