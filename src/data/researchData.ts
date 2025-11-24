export interface Paper {
  title: string
  authors: string
  venue: string
  year: string
  links: {
    paper?: string
    code?: string
    demo?: string
    website?: string
  }
}

export interface Demo {
  title: string
  url: string
  description?: { zh: string; en: string }
}

export interface ResearchPoint {
  id: string
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  papers: Paper[]
  demos?: Demo[]
}

export interface FlowNode {
  id: string
  label: { zh: string; en: string }
  position: { x: number; y: number }
  type?: 'default' | 'input' | 'output'
}

export interface FlowEdge {
  id: string
  source: string
  target: string
}

export interface FlowDiagram {
  nodes: FlowNode[]
  edges: FlowEdge[]
  researchPointMapping: Record<string, string> // nodeId -> researchPointId
}

export interface ResearchDirection {
  id: string
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  flowDiagram: FlowDiagram
  researchPoints: ResearchPoint[]
}

export const researchDirections: ResearchDirection[] = [
  {
    id: 'semantic-parsing',
    title: {
      zh: '低资源场景下语义解析',
      en: 'Semantic Parsing in Low-Resource Scenarios',
    },
    description: {
      zh: '提升低资源场景下语义解析效果，重点关注安全感知、弱监督学习、模型一致性、知识遗忘和多模型协作等问题。',
      en: 'Improve semantic parsing effectiveness in low-resource scenarios, focusing on security awareness, weakly supervised learning, model consistency, knowledge forgetting, and multi-model collaboration.',
    },
    flowDiagram: {
      nodes: [
        {
          id: 'input',
          label: { zh: '自然语言查询', en: 'Natural Language Query' },
          position: { x: 100, y: 100 },
          type: 'input',
        },
        {
          id: 'model',
          label: { zh: '安全感知的语义解析模型', en: 'Security-aware Semantic Parsing Model' },
          position: { x: 300, y: 100 },
        },
        {
          id: 'sql',
          label: { zh: '可执行SQL', en: 'Executable SQL' },
          position: { x: 500, y: 50 },
          type: 'output',
        },
        {
          id: 'reasoning',
          label: { zh: '程序化推理', en: 'Programmatic Reasoning' },
          position: { x: 500, y: 150 },
          type: 'output',
        },
        {
          id: 'rp1',
          label: { zh: '研究点1: 弱监督下推理线索驱动', en: 'RP1: Weakly Supervised Reasoning Clue-Driven' },
          position: { x: 100, y: 300 },
        },
        {
          id: 'rp2',
          label: { zh: '研究点2: 无监督下逻辑一致性驱动', en: 'RP2: Unsupervised Logic Consistency-Driven' },
          position: { x: 300, y: 300 },
        },
        {
          id: 'rp3',
          label: { zh: '研究点3: SQL组合泛化的持续解析', en: 'RP3: Continuous Parsing for SQL Combinatorial Generalization' },
          position: { x: 500, y: 300 },
        },
        {
          id: 'rp4',
          label: { zh: '研究点4: 参数知识共享的持续解析', en: 'RP4: Continuous Parsing for Parameter Knowledge Sharing' },
          position: { x: 700, y: 300 },
        },
        {
          id: 'rp5',
          label: { zh: '研究点5: 数据库隐私感知的LLM安全语义', en: 'RP5: Database Privacy-aware LLM Secure Semantic' },
          position: { x: 500, y: 500 },
        },
      ],
      edges: [
        { id: 'e1', source: 'input', target: 'model' },
        { id: 'e2', source: 'model', target: 'sql' },
        { id: 'e3', source: 'model', target: 'reasoning' },
        { id: 'e4', source: 'rp1', target: 'model' },
        { id: 'e5', source: 'rp2', target: 'model' },
        { id: 'e6', source: 'rp3', target: 'model' },
        { id: 'e7', source: 'rp4', target: 'model' },
        { id: 'e8', source: 'rp5', target: 'model' },
      ],
      researchPointMapping: {
        rp1: 'weakly-supervised',
        rp2: 'logic-consistency',
        rp3: 'sql-combinatorial',
        rp4: 'parameter-sharing',
        rp5: 'privacy-aware',
      },
    },
    researchPoints: [
      {
        id: 'weakly-supervised',
        title: {
          zh: '弱监督下推理线索驱动的语义解析方法',
          en: 'Weakly Supervised Reasoning Clue-Driven Semantic Parsing Method',
        },
        description: {
          zh: '通过推理线索发掘、自监督学习和对比实例构造，在弱监督场景下提升语义解析效果。',
          en: 'Improve semantic parsing effectiveness in weakly supervised scenarios through reasoning clue discovery, self-supervised learning, and contrastive instance construction.',
        },
        papers: [
          {
            title: 'Weakly Supervised Reasoning Clue-Driven Semantic Parsing',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'logic-consistency',
        title: {
          zh: '无监督下逻辑一致性驱动的语义解析方法',
          en: 'Unsupervised Logic Consistency-Driven Semantic Parsing Method',
        },
        description: {
          zh: '通过LLM内部偏见发掘、执行归纳、实例原型、上下文学习和指令微调，提升模型推理一致性。',
          en: 'Improve model inference consistency through LLM internal bias discovery, execution induction, instance prototypes, in-context learning, and instruction fine-tuning.',
        },
        papers: [
          {
            title: 'Unsupervised Logic Consistency-Driven Semantic Parsing',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'sql-combinatorial',
        title: {
          zh: '面向SQL组合泛化的持续语义解析方法',
          en: 'Continuous Semantic Parsing Method for SQL Combinatorial Generalization',
        },
        description: {
          zh: '通过基于LLM记忆重建、记忆回放和知识传递，解决知识覆盖遗忘快的问题。',
          en: 'Address the problem of fast knowledge coverage forgetting through LLM memory reconstruction, memory replay, and knowledge transfer.',
        },
        papers: [
          {
            title: 'Continuous Semantic Parsing for SQL Combinatorial Generalization',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'parameter-sharing',
        title: {
          zh: '面向参数知识共享的持续语义解析方法',
          en: 'Continuous Semantic Parsing Method for Parameter Knowledge Sharing',
        },
        description: {
          zh: '通过LLM自适应预热、多专家元学习和动态协作推理，解决多模型间协作难的问题。',
          en: 'Address the problem of difficult multi-model collaboration through LLM adaptive pre-training, multi-expert meta-learning, and dynamic collaborative reasoning.',
        },
        papers: [
          {
            title: 'Continuous Semantic Parsing for Parameter Knowledge Sharing',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'privacy-aware',
        title: {
          zh: '数据库隐私感知的LLM安全语义方法',
          en: 'Database Privacy-aware LLM Secure Semantic Method',
        },
        description: {
          zh: '通过恶意模式归纳、数据自动合成、推理预热和交替偏好优化，防范数据库敏感数据泄露。',
          en: 'Prevent sensitive database data leakage through malicious pattern induction, automatic data synthesis, reasoning pre-training, and alternating preference optimization.',
        },
        papers: [
          {
            title: 'Database Privacy-aware LLM Secure Semantic Method',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'document-intelligence',
    title: {
      zh: '文档智能问答',
      en: 'Document Intelligence Question Answering',
    },
    description: {
      zh: '提升文档智能背景下复杂布局文档和多页文档的问答能力，重点关注跨区域推理、跨页推理、定位能力增强、检索增强和强化学习。',
      en: 'Improve question-answering capabilities for complex layout documents and multi-page documents under document intelligence, focusing on cross-region reasoning, cross-page reasoning, positioning capability enhancement, retrieval augmentation, and reinforcement learning.',
    },
    flowDiagram: {
      nodes: [
        {
          id: 'input',
          label: { zh: '文档输入', en: 'Document Input' },
          position: { x: 100, y: 100 },
          type: 'input',
        },
        {
          id: 'complex-layout',
          label: { zh: '复杂布局理解', en: 'Complex Layout Understanding' },
          position: { x: 300, y: 50 },
        },
        {
          id: 'multi-page',
          label: { zh: '多页文档理解', en: 'Multi-page Document Understanding' },
          position: { x: 300, y: 150 },
        },
        {
          id: 'output',
          label: { zh: '结构化输出', en: 'Structured Output' },
          position: { x: 500, y: 100 },
          type: 'output',
        },
        {
          id: 'rp1',
          label: { zh: '研究点1: 构造文档推理数据', en: 'RP1: Construct Document Reasoning Data' },
          position: { x: 100, y: 300 },
        },
        {
          id: 'rp2',
          label: { zh: '研究点2: 增强模型定位能力', en: 'RP2: Enhance Model Positioning Capability' },
          position: { x: 300, y: 300 },
        },
        {
          id: 'rp3',
          label: { zh: '研究点3: 设计检索增强方法', en: 'RP3: Design Retrieval Augmentation Methods' },
          position: { x: 500, y: 300 },
        },
        {
          id: 'rp4',
          label: { zh: '研究点4: 设计强化学习方法', en: 'RP4: Design Reinforcement Learning Methods' },
          position: { x: 700, y: 300 },
        },
      ],
      edges: [
        { id: 'e1', source: 'input', target: 'complex-layout' },
        { id: 'e2', source: 'input', target: 'multi-page' },
        { id: 'e3', source: 'complex-layout', target: 'output' },
        { id: 'e4', source: 'multi-page', target: 'output' },
        { id: 'e5', source: 'rp1', target: 'complex-layout' },
        { id: 'e6', source: 'rp1', target: 'multi-page' },
        { id: 'e7', source: 'rp2', target: 'complex-layout' },
        { id: 'e8', source: 'rp2', target: 'multi-page' },
        { id: 'e9', source: 'rp3', target: 'output' },
        { id: 'e10', source: 'rp4', target: 'output' },
      ],
      researchPointMapping: {
        rp1: 'reasoning-data',
        rp2: 'positioning',
        rp3: 'retrieval-augmentation',
        rp4: 'reinforcement-learning',
      },
    },
    researchPoints: [
      {
        id: 'reasoning-data',
        title: {
          zh: '构造文档推理数据',
          en: 'Construct Document Reasoning Data',
        },
        description: {
          zh: '通过教师-学生模型方法，使用模板或样例生成思维链数据，训练学生模型产生结构化输出。',
          en: 'Generate chain-of-thought data using templates or examples through a teacher-student model approach, training the student model to produce structured outputs.',
        },
        papers: [
          {
            title: 'Constructing Document Reasoning Data for Question Answering',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'positioning',
        title: {
          zh: '增强模型定位能力',
          en: 'Enhance Model Positioning Capability',
        },
        description: {
          zh: '通过跨模态注意力机制融合文本和视觉特征，结合文本引导和平衡注意力增强LLM的定位能力。',
          en: 'Enhance LLM positioning capability through cross-modal attention mechanisms that fuse text and visual features, combined with text guidance and balanced attention.',
        },
        papers: [
          {
            title: 'Enhancing Model Positioning Capability for Document Understanding',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'retrieval-augmentation',
        title: {
          zh: '设计检索增强方法',
          en: 'Design Retrieval Augmentation Methods',
        },
        description: {
          zh: '通过OCR文本检索、多模态相似度检索和关键词置信度检索，增强文档问答的信息检索能力。',
          en: 'Enhance information retrieval capabilities for document question answering through OCR text retrieval, multimodal similarity retrieval, and keyword confidence retrieval.',
        },
        papers: [
          {
            title: 'Retrieval Augmentation Methods for Document Intelligence',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'reinforcement-learning',
        title: {
          zh: '设计强化学习方法',
          en: 'Design Reinforcement Learning Methods',
        },
        description: {
          zh: '通过参考模型、文档理解策略模型和奖励模型，使用格式奖励、证据页奖励、答案奖励和一致性奖励训练模型。',
          en: 'Train models using format rewards, evidence page rewards, answer rewards, and consistency rewards through reference models, document understanding policy models, and reward models.',
        },
        papers: [
          {
            title: 'Reinforcement Learning for Document Understanding',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
    ],
  },
]

