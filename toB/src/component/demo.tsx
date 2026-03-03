import { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Form, Input, Row, Select, Table, Tabs, type TableColumnsType } from "antd";
import "./demo.scss";

type User = { id: number; name: string; status: "enabled" | "disabled" };

const DB: User[] = Array.from({ length: 57 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  status: Math.random() > 0.5 ? "enabled" : "disabled",
}));

async function fetchUsers(params: {
  tab: "all" | "enabled" | "disabled";
  name?: string;
  status?: "" | "enabled" | "disabled";
  page: number;
  pageSize: number;
}) {
  const { tab, name = "", status = "", page, pageSize } = params;
  await new Promise((r) => setTimeout(r, 300));

  let rows = DB;
  if (tab !== "all") rows = rows.filter((u) => u.status === tab);
  if (name.trim()) rows = rows.filter((u) => u.name.toLowerCase().includes(name.toLowerCase()));
  if (status) rows = rows.filter((u) => u.status === status);

  const total = rows.length;
  const start = (page - 1) * pageSize;
  const list = rows.slice(start, start + pageSize);

  return { list, total };
}

export default function UsersDemo() {
  const [form] = Form.useForm();
  const [tab, setTab] = useState<"all" | "enabled" | "disabled">("all");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<User[]>([]);
  const [total, setTotal] = useState(0);

  const runFetch = async () => {
    setLoading(true);
    try {
      const res = await fetchUsers({
        tab,
        name: form.getFieldValue("name") ?? "",
        status: form.getFieldValue("status") ?? "",
        page,
        pageSize,
      });
      setData(res.list);
      setTotal(res.total);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, page, pageSize]);

  const columns: TableColumnsType<User> = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (v: User["status"]) => (v === "enabled" ? "Enabled" : "Disabled"),
      responsive: ["sm"],
    },
  ];

  return (
    <div className="users-demo">
      <div className="users-demo__inner">
        <Breadcrumb
          className="users-demo__breadcrumb"
          items={[{ title: "Home" }, { title: "System" }, { title: "User Management" }]}
        />

        <Card className="users-demo__card" bordered={false}>
          <Tabs
            activeKey={tab}
            onChange={(k) => {
              setTab(k as "all" | "enabled" | "disabled");
              setPage(1);
            }}
            items={[
              { key: "all", label: "All" },
              { key: "enabled", label: "Enabled" },
              { key: "disabled", label: "Disabled" },
            ]}
          />

          <Form
            form={form}
            layout="vertical"
            className="users-demo__form"
            initialValues={{ name: "", status: "" }}
          >
            <Row gutter={12}>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Form.Item label="Name" name="name">
                  <Input placeholder="Enter name" allowClear />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8} lg={6}>
                <Form.Item label="Status" name="status">
                  <Select
                    allowClear
                    placeholder="Select status"
                    options={[
                      { label: "Enabled", value: "enabled" },
                      { label: "Disabled", value: "disabled" },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={8} lg={12}>
                <Form.Item label=" ">
                  <div className="users-demo__actions">
                    <Button
                      type="primary"
                      onClick={() => {
                        setPage(1);
                        runFetch();
                      }}
                    >
                      Search
                    </Button>
                    <Button
                      onClick={() => {
                        form.resetFields();
                        setPage(1);
                        runFetch();
                      }}
                    >
                      Reset
                    </Button>
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Form>

          <Table<User>
            rowKey="id"
            loading={loading}
            columns={columns}
            dataSource={data}
            scroll={{ x: 720, y: "calc(100vh - 420px)" }}
            sticky
            pagination={{
              current: page,
              pageSize,
              total,
              showSizeChanger: true,
              showQuickJumper: true,
              onChange: (p, ps) => {
                setPage(p);
                setPageSize(ps);
              },
            }}
          />
        </Card>
      </div>
    </div>
  );
}
